const { Command } = require('Nasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
        name: 'predict',
        aliases: ['8ball', 'mirror', 'crystalball'],
        guarded: true,
        description: 'Ask Issei Hyoudou a question and she will predict the future.',
        usage: '<question:string>',
        extendedHelp: `Simply do predict ||predict <question> to get a prediction.`
      });

    this.customizeResponse('question',
      'You need to give me something to predict.'
    );
  }

  async run(message, [question]) {
    const answers =
      [
        'Maybe.',
        'Certainly not.',
        'I hope so, darling.',
        'Not in our wildest dreams.',
        'There is a good chance.',
        'Quite likely.',
        'I think so.',
        'I hope not.',
        'I hope so.',
        'Never!',
        'Ahaha! Really?!? XD',
        'Hell, yes.',
        'Hell to the no.',
        'The future is bleak',
        'The future is uncertain',
        'I would rather not say',
        'Who cares?',
        'Possibly',
        'Never, ever, ever... ever.',
        'There is a small chance.',
        'Yes!'
      ];

    return message.reply(question.endsWith('?')
      ? `${answers[Math.floor(Math.random() * answers.length)]}`
      : 'That doesn\'t look like a question, try adding a question mark (?) and asking again, darling.');
  }
};