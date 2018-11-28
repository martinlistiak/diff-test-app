import * as express from 'express';
import Repositoryfrom from '../controllers/repositoryController';

const router = express.Router();

router.route('/repo/:username/:repo')
    .get(User.fetchUserRepos);

export default router;
