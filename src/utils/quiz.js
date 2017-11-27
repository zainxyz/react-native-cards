import _round from 'lodash/round';

export const calculateQuizScore = (score, total) => `${_round(score / total, 2) * 100}%`;
