import * as express from 'express';
import UserApollo from '../controllers/userApolloController';
import User from '../controllers/userController';

const router = express.Router();

router.route('/:username')
    .get(UserApollo.fetchUser);

router.route('/:username/repos')
    .get(User.fetchUserRepos);

export default router;
