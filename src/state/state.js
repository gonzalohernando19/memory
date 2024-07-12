export const LEVELS = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD',
};

class State {
  constructor() {
    this.user = localStorage.getItem('playerName') || '';
    this.score = localStorage.getItem(`${this.user}_score`) || 0;
    this.level = LEVELS.EASY;
  }

  setUser(user) {
    this.user = user;
    localStorage.setItem('playerName', user);
    this.loadScore();
  }

  loadScore() {
    this.score = localStorage.getItem(`${this.user}_score`) || 0;
  }

  setScore(score) {
    this.score = score;
    localStorage.setItem(`${this.user}_score`, this.score.toString());
  }
}

export const UserState = new State();
