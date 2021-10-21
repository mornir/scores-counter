# Scores Counter

> A utility for calculating scores from the Heart Challenge game https://scores-counter.netlify.app

In a Discord group, we're playing a game called Heart Challenge. We rate our productivity each day from 0 to 10 and after 4 weeks we compare our scores to find out the top 3 winners. The goal of this game to encourage productivity by adding a social aspect.

Players write their scores directly in a Discord message that they update daily. Scores format be seen in the test fixture.

At the end of the 4-week-challenge, moderators manually add up all the daily scores to find out the total score up. On a boring day at work, I had the idea to write a tiny JS script to speed the process by letting moderators copy paste the Discord comment, then parse it and automatically calculate the total score.
