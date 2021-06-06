<template>
    <div class="wrapper">
        <div class="test-container">
            <div v-if="testStatus" class="test">
                <Spinner
                    v-if="getQuestionsList.status === 'loading'"
                    class="loading"
                    :style="{ margin: 'auto', width: '50px' }"
                    :size="25"
                    :line-bg-color="'#b1b2b7'"
                    :line-fg-color="'#26bcc2'"
                />
                <span
                    v-else-if="getQuestionsList.status === 'error'"
                    :style="{ margin: 'auto', color: '#545969' }"
                    >Тест не найден</span
                >
                <template v-else-if="getQuestionsList.status === 'success'">
                    <div class="test-block">
                        <div class="test__progress">
                            <router-link class="progress-close" to="/tests"
                                ><Close
                            /></router-link>
                            <progress
                                class="progress-bar"
                                :value="openedQuestionInd + 1"
                                :max="getQuestionsList.data.questions.length"
                            ></progress>
                        </div>
                        <h2 class="test__name">
                            {{ getQuestionsList.data.testInfo.title }}
                        </h2>
                    </div>

                    <QuestionBlock
                        :question-number="openedQuestionInd + 1"
                        :question-info="
                            getQuestionsList.data.questions[openedQuestionInd]
                        "
                        :select-option="selectOption"
                    />
                    <div class="test__nav-btns-container">
                        <button
                            v-if="openedQuestionInd !== 0"
                            class="nav-btn prev active"
                            :disabled="!selectedValue"
                            @click="prevQuestion()"
                        >
                            Назад
                        </button>
                        <button
                            v-if="
                                currentQuestionNumber <
                                    test.questions.length - 1
                            "
                            class="nav-btn active"
                            :disabled="!selectedValue"
                            @click="nextQuestion()"
                        >
                            Дальше
                        </button>

                        <button
                            v-else
                            class="nav-btn active"
                            :disabled="!selectedValue"
                            @click="endTest()"
                        >
                            Завершить тест
                        </button>
                    </div>
                </template>
            </div>
            <div v-else class="test-passed">
                <Medal class="test-passed__medal" />
                <h2 class="test-passed__headline">Тест пройден</h2>
                <div class="test-passed__statistic">
                    <div class="statistic__rights-answers">
                        <Complete class="rights-answers__icon" />{{
                            rightAnswers
                        }}
                        из {{ test.questions.length }}
                    </div>
                    <div class="statistic__time">
                        <Time class="time__icon" />{{ leadTime }}
                    </div>
                </div>
                <div class="test-passed__reward">
                    <div class="reward__coins">
                        <CoinSvg class="coins__icon" />{{ reward.coins }}
                    </div>
                    <div class="reward__lightning">
                        <LightningSvg class="lightning__icon" />{{
                            reward.lightnings
                        }}
                    </div>
                </div>
                <router-link class="test-passed__back" to="/tests"
                    >К списку тестов</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
// icons
import Close from '@/assets/icons/tests/close.svg'
import Medal from '@/assets/icons/tests/medal.svg'
import LightningSvg from '@/assets/icons/lightning.svg'
import CoinSvg from '@/assets/icons/coin.svg'
import Complete from '@/assets/icons/tests/complete.svg'
import Time from '@/assets/icons/tests/time.svg'
import QuestionBlock from '@/components/QuestionBlock.vue'
import { QUESTIONS_REQUEST } from '@/store/action-types/tests'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Spinner from 'vue-simple-spinner'
export default {
    components: {
        Close,
        Medal,
        LightningSvg,
        CoinSvg,
        Complete,
        Time,
        QuestionBlock,
        Spinner,
    },
    props: {
        id: {
            default: '0',
            type: String,
        },
    },
    data() {
        return {
            testStatus: true,
            openedQuestionInd: 0,
            selectedValue: null,
            currentQuestionNumber: 0,
            rightAnswers: 0,
            reward: {},
        }
    },
    computed: {
        ...mapGetters('tests', ['getTests', 'getQuestionsList']),
        test: function() {
            return this.getTests.filter(
                test => test.id === parseInt(this.id, 10)
            )[0]
        },
        // numberQuestions: function() {
        //     return this.test.questions.length
        // },
    },
    async mounted() {
        await this.QUESTIONS_REQUEST(this.id)
        console.log(this.getQuestionsList)
    },
    methods: {
        ...mapActions('tests', [QUESTIONS_REQUEST]),
        ...mapMutations(['accrueReward']),
        selectOption: function(option) {
            if (this.selectedValue === option) {
                this.selectedValue = null
            } else {
                this.selectedValue = option
            }
        },
        nextQuestion: function() {
            this.openedQuestionInd += 1
            this.selectedValue = null
        },
        endTest: function() {
            if (
                this.test.questions[this.currentQuestionNumber].answer ===
                this.selectedValue
            ) {
                this.rightAnswers += 1
            }
            this.testStatus = false
            let endTime = new Date()
            let ms = endTime - this.startTime
            let toDate = new Date(ms)
            this.leadTime =
                toDate.getUTCMinutes() + ':' + toDate.getUTCSeconds()
            let coins = Math.round(
                this.test.reward.coins *
                    (this.rightAnswers / this.test.questions.length)
            )
            let lightnings = Math.round(
                this.test.reward.lightnings *
                    (this.rightAnswers / this.test.questions.length)
            )
            this.reward = {
                coins: coins,
                lightnings: lightnings,
            }
            this.$store.commit('accrueReward', this.reward)
            this.$store.commit('tests/deleteTest', this.test.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
}
.test-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 140px;
    width: 70%;
    overflow-y: auto;
    .test {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        justify-content: flex-start;
        align-items: center;
        padding: 25px 150px;
        height: 70vh;
        .test-block {
            width: 100%;
            margin-bottom: 15px;
        }
        &__progress {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            .progress {
                &-close {
                    width: 23.35px;
                    height: 19px;
                    background: transparent;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    margin-right: 6px;
                }
                &-bar {
                    height: 17px;
                    display: block;
                    appearance: none;
                    -webkit-appearance: none;
                    border-radius: 10px;
                    width: 100%;
                    &::-webkit-progress-bar {
                        background-color: #d8dcea;
                        border-radius: 10px;
                    }
                    &::-webkit-progress-value {
                        background: #26bcc2;
                        border-radius: 10px;
                    }
                }
            }
        }
        &__name {
            margin-top: 20px;
            font-size: 24px;
            color: #000;
            text-align: center;
        }
        &__nav-btns-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: auto;
            .nav-btn {
                box-sizing: border-box;
                background: #89dce0;
                border-radius: 10px;
                border: none;
                border: 2px solid #26bcc2;
                border-bottom: 4px solid #26bcc2;
                outline: none;
                font-size: 14px;
                line-height: 19px;
                color: #1a2740;
                width: 312px;
                height: 41px;
                cursor: pointer;
                justify-self: space-between;
                margin-bottom: 10px;
                &:disabled {
                    border: none;
                    outline: none;
                    background: #abb2c7;
                    color: #545969;
                    cursor: unset;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
            .prev {
                background: transparent;

                &:disabled {
                    border: 2px solid #abb2c7;
                    outline: none;
                    background: transparent;
                    color: #545969;
                    cursor: unset;
                }
            }
        }
    }
    .test-passed {
        margin-top: 118px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__medal {
            width: 151px;
            height: 151px;
        }
        &__headline {
            margin-top: 14px;
            margin-bottom: 37px;
            font-size: 24px;
            line-height: 33px;
            color: #545969;
        }
        &__statistic {
            display: flex;
            flex-direction: row;
            font-size: 18px;
            line-height: 25px;
            color: #545969;
            margin-bottom: 27px;
            .statistic {
                &__rights-answers {
                    display: flex;
                    align-items: center;
                    .rights-answers__icon {
                        width: 24px;
                        height: 24px;
                    }
                }
                &__time {
                    display: flex;
                    align-items: center;
                    margin-left: 23px;
                    .time__icon {
                        width: 21.64px;
                        height: 24.59;
                    }
                }
            }
        }
        &__reward {
            display: flex;
            flex-direction: row;
            font-size: 18px;
            line-height: 16px;
            .reward__coins {
                display: flex;
                align-items: center;
                color: #f2af49;
                .coins__icon {
                    height: 24px;
                    width: 24px;
                }
            }
            .reward__lightning {
                display: flex;
                align-items: center;
                color: #50af8d;
                margin-left: 23px;
                .lightning__icon {
                    width: 14.62px;
                    height: 24px;
                }
            }
        }
        &__back {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            background: #89dce0;
            border-radius: 10px;
            border: none;
            border: 2px solid #26bcc2;
            border-bottom: 4px solid #26bcc2;
            outline: none;
            font-size: 14px;
            line-height: 19px;
            color: #1a2740;
            width: 312px;
            height: 41px;
            margin-top: 85px;
            cursor: pointer;
            text-decoration: none;
        }
    }
}
</style>