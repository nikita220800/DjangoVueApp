from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobPositionViewSet, DivisionViewSet, UserProfileViewSet, StatisticsViewSet, \
    TaskViewSet, WeeklyTaskViewSet, TeamsViewSet,  competition, ProductViewSet, shop, LogoutView, LogoutAllView, \
    TestsViewSet, QuestionsViewSet, AnswersViewSet, TestBlockViewSet, AchievementViewSet, RequirenmentToGetAchieveViewSet, \
    AchieveRequirenmentStatusViewSet, AchievementUserStatusViewSet, update_user_money_energy, userFilterForCompetition, get_quests, get_daily_tasks, get_weekly_tasks, TestUserViewSet, unresolved_test, QuestionThemeViewSet, test_questions, send_answers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'job-positions', JobPositionViewSet)
router.register(r'divisions', DivisionViewSet)
router.register(r'users', UserProfileViewSet)
router.register(r'statistics', StatisticsViewSet)
router.register(r'teams', TeamsViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'weekly-tasks', WeeklyTaskViewSet)
router.register(r'products', ProductViewSet)
router.register(r'tests', TestsViewSet)
router.register(r'tests-user', TestUserViewSet)
router.register(r'questions', QuestionsViewSet)
router.register(r'answers', AnswersViewSet)
router.register(r'test-block', TestBlockViewSet)
router.register(r'question-theme', QuestionThemeViewSet)
router.register(r'achievement', AchievementViewSet)
router.register(r'requirenment-to-get-achieve',
                RequirenmentToGetAchieveViewSet)
router.register(r'achieve-requirenment-status',
                AchieveRequirenmentStatusViewSet)
router.register(r'achievement-user-status',
                AchievementUserStatusViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='auth_logout'),
    path('logout-all', LogoutAllView.as_view(), name='auth_logout_all'),
    path('refresh-token', TokenRefreshView.as_view(), name='refresh-token'),
    path('shop', shop, name='shop'),
    path('update-money-energy', update_user_money_energy,
         name='update-money-energy'),
    path('competition', competition, name='competition'),
    path('unresolved_test', unresolved_test, name='unresolved_test'),
    path('test-questions', test_questions, name='test_questions'),
    path('send-answers', send_answers, name='send-answers'),
    path('user-filter-for-competitions', userFilterForCompetition,
         name='user-filter-for-competitions'),
    path('get-quests', get_quests, name='get-quests'),
    path('get-daily-tasks', get_daily_tasks, name='get-daily-tasks'),
    path('get-weekly-tasks', get_weekly_tasks, name='get-weekly-tasks'), ]


# path('competition/currentcompetitions', currentcompetitions, name = 'currentcompetitions')
# path('searchcompetitions')
