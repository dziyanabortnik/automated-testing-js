import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('Student Knowledge Checker', () => {
  describe('checkStudentKnowledge', () => {
    it('should return true for correct answers', () => {
      const studentAnswers = { question1: 'A', question2: 'B' };
      const correctAnswers = { question1: 'A', question2: 'B' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false for incorrect answers', () => {
      const studentAnswers = { question1: 'A', question2: 'C' };
      const correctAnswers = { question1: 'A', question2: 'B' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false for mismatched keys', () => {
      const studentAnswers = { question1: 'A' };
      const correctAnswers = { question2: 'A' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false if student answers have extra keys', () => {
      const studentAnswers = { question1: 'A', question2: 'B', question3: 'C' };
      const correctAnswers = { question1: 'A', question2: 'B' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false if correct answers have extra keys', () => {
      const studentAnswers = { question1: 'A', question2: 'B' };
      const correctAnswers = { question1: 'A', question2: 'B', question3: 'C' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should handle empty objects as answers', () => {
      const studentAnswers = {};
      const correctAnswers = {};
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false if student answers are empty and correct answers are not', () => {
      const studentAnswers = {};
      const correctAnswers = { question1: 'A' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false if correct answers are empty and student answers are not', () => {
      const studentAnswers = { question1: 'A' };
      const correctAnswers = {};
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });
  });
});
