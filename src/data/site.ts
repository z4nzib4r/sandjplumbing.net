export const site = {
  name: 'S & J Plumbing',
  tagline: 'From our home to yours!',
  url: 'https://www.sandjplumbing.net',
  founded: 1994,
  license: 'OH #34371',
  email: 'sandjplumbing@yahoo.com',
  phones: [
    { label: 'Office', display: '740-593-7716', href: 'tel:+17405937716' },
    { label: 'Alt', display: '740-591-0648', href: 'tel:+17405910648' },
  ],
  address: {
    street: '9009 Elliotsville Rd',
    city: 'Athens',
    state: 'OH',
    zip: '45701',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=9009+Elliotsville+Rd+Athens+OH+45701',
};

export const yearsInBusiness = new Date().getFullYear() - site.founded;

export type IconName =
  | 'heater'
  | 'drain'
  | 'waterline'
  | 'flame'
  | 'pipe'
  | 'search'
  | 'faucet'
  | 'house'
  | 'building';

export const services: { icon: IconName; title: string; short: string; body: string }[] = [
  {
    icon: 'building',
    title: 'Residential & Commercial Plumbing',
    short: 'From a leaky faucet to plumbing a whole commercial build.',
    body: 'We can help with all of your plumbing needs, from that leaky faucet to completely plumbing your commercial project. We hold an Ohio state license for commercial work.',
  },
  {
    icon: 'heater',
    title: 'Water Heater Repair & Installation',
    short: 'Repair or replace, gas/LP or electric, done to code.',
    body: "We'll troubleshoot your current water heater to see if it's repairable, or install a new Rheem gas/LP or electric unit. We install it correctly and make any upgrades needed to meet state code and keep your family safe.",
  },
  {
    icon: 'drain',
    title: 'Sewer & Drain Snaking and Jetting',
    short: 'Clogged drain? We have the equipment for 1½″ to 4″ lines.',
    body: 'Have a clogged drain? We have the equipment to take care of it. We can snake or jet lines from 1½″ up to 4″.',
  },
  {
    icon: 'waterline',
    title: 'Water Line Installation',
    short: 'Leaking main line? We assess, repair or replace.',
    body: "Main water line to your home or business leaking? We'll come out, assess the issue, and tell you whether it can be repaired or needs to be completely replaced.",
  },
  {
    icon: 'flame',
    title: 'Gas Line Repair & Installation',
    short: 'Leaks found and fixed, new lines run safely.',
    body: "Have a gas leak or need new lines installed? Call us and we'll figure out the best solution to your problem.",
  },
  {
    icon: 'pipe',
    title: 'Water Piping Repair & Installation',
    short: 'Leaking pipes fixed, new sinks and washers plumbed in.',
    body: "Notice a pipe leaking or hear water spraying somewhere? We'll take care of it. Want to add a sink, washing machine or another fixture that needs water? We can do that too.",
  },
  {
    icon: 'search',
    title: 'Leak & Clog Troubleshooting',
    short: 'Sinks, toilets, faucets, tubs and sewer pipes.',
    body: 'Leaks and clogs in sinks, toilets, faucets, bathtubs and sewer pipes. Our crew has the experience to find the real problem and the best solution.',
  },
  {
    icon: 'house',
    title: 'New Builds & Remodels',
    short: 'Full-service plumbing from the ground up.',
    body: "We're a full-service plumbing company that can help from the ground up. Building a new home or business? Remodeling? We can handle every part of the plumbing.",
  },
  {
    icon: 'faucet',
    title: 'Fixture Repair, Replacement & Installation',
    short: 'Quality name-brand fixtures from local suppliers.',
    body: 'We buy name-brand fixtures directly from local supply companies, so you get quality fixtures that last, unlike the stuff from big-box stores or the internet.',
  },
];

export const testimonials = [
  {
    quote:
      "Since I posted on Facebook that Justin saved the day by finding our gas leak and capping it (he is a plumbing detective, people, and relentless in pursuit of leaks!) when I really, really needed my stove, several of my friends have piped up that he saved them from some horrible-sounding plumbing-related disaster too! I am grateful to Amber and to Justin for working hard, fitting me in during a busy time, not giving up, and fixing the problem! \"Professional\" is too weak a word for this company. We'll have to make up a new one.",
    name: 'K. Holcomb',
    tag: 'Gas leak',
  },
  {
    quote:
      'Excellent service. I had a water heater go bad and they were here promptly with a new one. Great service and friendly! I\'d definitely recommend their services!',
    name: 'J. Mills',
    tag: 'Water heater',
  },
  {
    quote:
      'We have an older house and have had some plumbing issues. We were so pleased with Justin and his knowledge and ability to solve our plumbing issue. We were expecting to need a much bigger job done, but Justin found a way to solve the problem and save us some money. He was like a plumber "surgeon." Amber, who answered the phone, was not just knowledgeable, but very personable, friendly, and sincerely interested in helping us. Very Happy! :-)',
    name: 'C.',
    tag: 'Older home',
  },
  {
    quote:
      'Were willing to come out for a small project and completed it quickly and went a step beyond to conceal cable wires hanging over crawl space entry. Will definitely call again when I have bigger bathroom projects. Thanks!',
    name: 'D. McBride',
    tag: 'Small job',
  },
];
