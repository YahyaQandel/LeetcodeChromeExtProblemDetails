class Problem {
  title = "";
  identifiers = {
    'QUESTION_TITLE':""
  }
  setTitle(title) {
    if (title !== undefined && title !== "undefined" && title !== null) {
      this.title = title.trim().toLocaleLowerCase();
    }
  }

  generateDetailsURL() {
    const new_problem_title = this.title.replace(/\s+/g, '-').toLowerCase();
    return `https://leetcode.com/problems/${new_problem_title}`;
  }
}

const problem = new Problem();
