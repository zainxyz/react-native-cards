import _round from 'lodash/round';
import _max from 'lodash/max';
import _isEmpty from 'lodash/isEmpty';

// export const calculateQuizScore = (score, total) => `${_round(score / total, 2) * 100}%`;

export const calculateQuizScore = (score, total) => _round(score / total, 2) * 100;

export const getHighestQuizScore = scores => (_isEmpty(scores) ? '0%' : `${_max(scores)}%`);
