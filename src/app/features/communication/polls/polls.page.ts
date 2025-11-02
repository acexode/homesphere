import { Component } from '@angular/core';

interface Poll {
  question: string;
  options: { label: string; votes: number }[];
}

@Component({
  selector: 'app-polls',
  templateUrl: './polls.page.html',
  styleUrls: ['./polls.page.scss'],
})
export class PollsPage {
  polls: Poll[] = [
    {
      question: 'Should we extend pool hours during summer weekends?',
      options: [
        { label: 'Yes, extend to 10pm', votes: 68 },
        { label: 'Keep current timings', votes: 21 },
        { label: 'Close earlier', votes: 4 },
      ],
    },
  ];

  public getTotalVotes(poll: Poll): number {
    const total = poll.options.reduce((sum, option) => sum + option.votes, 0);
    return total === 0 ? 1 : total;
  }
}
