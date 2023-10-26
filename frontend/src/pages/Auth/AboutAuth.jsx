import React from "react";
import styles from './auth.module.scss'

const AboutAuth = () => {
  return (
    <div className={styles.aboutAuth}>
      <h1>Join the Stack Overflow community</h1>
      <p>Get unstuck — ask a question</p>
      <p>Unlock new privileges like voting and commenting</p>
      <p>Save your favorite questions, answers, watch tags, and more</p>
      <p>Earn reputation and badges</p>
      <p className="text-sm text-light-gray">
        Collaborate and share knowledge with a private group for
      </p>
      <p className="text-sm text-link-color">
        Get Stack Overflow for Teams free for up to 50 users.
      </p>
    </div>
  );
};

export default AboutAuth;
