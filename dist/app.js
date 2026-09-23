const principles = [
  {
    title: 'People face <strong>trade-offs</strong>.',
    image: './assets/principle-01.png',
    alt: 'A student choosing between leisure at the beach and working at a desk',
    explanation: '时间、收入和资源都有限。选择一种行动，通常意味着放弃另一种行动，这就是<strong>权衡取舍</strong>。',
    example: '今晚只有两小时，你可以复习经济学，也可以和朋友出去。多花一小时娱乐，就少一小时复习。'
  },
  {
    title: 'The cost of something is what you <strong>give up</strong> to get it.',
    image: './assets/principle-02.png',
    alt: 'A person choosing between an apple and a slice of cake',
    explanation: '真正的成本不只包括金钱，还包括为了得到它而放弃的最佳选择，即<strong>机会成本</strong>。',
    example: '上大学的成本除了学费，还包括你在同一段时间本来可以工作赚到的收入。'
  },
  {
    title: 'Rational people think at the <strong>margin</strong>.',
    image: './assets/principle-03.png',
    alt: 'A person comparing one additional cup with a cup already owned',
    explanation: '理性决策比较的是“再多做一点”的<strong>边际收益</strong>和<strong>边际成本</strong>，而不是只看总收益和总成本。',
    example: '考试前，你会比较“再复习一小时能提高多少分”和“少睡一小时带来的疲劳”。'
  },
  {
    title: 'People respond to <strong>incentives</strong>.',
    image: './assets/principle-04.png',
    alt: 'A shopper responding to a price tag and an upward signal',
    explanation: '<strong>激励</strong>会改变一项行动的收益或成本，因此会改变人们的选择。激励既可以是奖励，也可以是惩罚。',
    example: '地铁票打折会提高乘坐人数；违停罚款提高后，司机会更少违规停车。'
  },
  {
    title: '<strong>Trade</strong> can make everyone better off.',
    image: './assets/principle-05.png',
    alt: 'Two people exchanging a package and bananas',
    explanation: '贸易让个人或国家按照<strong>比较优势</strong>进行专业化生产，再交换彼此需要的商品，因此双方都可能受益。',
    example: '同学 A 擅长做演示图，同学 B 擅长写讲稿。分工后再合并成果，两人都能节省时间。'
  },
  {
    title: '<strong>Markets</strong> are usually a good way to organize economic activity.',
    image: './assets/principle-06.png',
    alt: 'Buyers and sellers meeting in a busy open market',
    explanation: '市场价格汇集了供求信息，引导买卖双方作出分散决策。亚当·斯密称这种协调力量为<strong>看不见的手</strong>。',
    example: '草莓供应减少时，价格上升会鼓励农户增加生产，同时让消费者减少购买。'
  },
  {
    title: '<strong>Governments</strong> can sometimes improve market outcomes.',
    image: './assets/principle-07.png',
    alt: 'A government representative stopping pollution from a factory',
    explanation: '当存在<strong>市场失灵</strong>，例如污染等外部性或垄断势力时，适当的公共政策可能提高效率或改善公平。',
    example: '工厂排污会伤害附近居民。政府征收排污税，可让企业承担污染造成的社会成本。'
  },
  {
    title: 'The standard of living depends on <strong>productivity</strong>.',
    image: './assets/principle-08.png',
    alt: 'Workers and a robotic arm producing boxes in a factory',
    explanation: '一个国家长期生活水平的关键，是每单位劳动能够生产多少商品和服务，也就是<strong>生产率</strong>。',
    example: '更好的教育、设备和技术让工人每小时生产更多产品，长期来看工资和生活水平也会提高。'
  },
  {
    title: 'Prices rise when the government prints too much <strong>money</strong>.',
    image: './assets/principle-09.png',
    alt: 'A money printer beside a shopping cart and a sharply rising arrow',
    explanation: '当货币数量增长远快于商品和服务的产量时，更多货币追逐相对有限的商品，整体<strong>价格水平</strong>会上升。',
    example: '如果经济中的商品数量变化不大，但流通货币迅速增加，人们愿意支付的价格往往会普遍上涨。'
  },
  {
    title: 'Society faces a short-run trade-off between <strong>inflation</strong> and <strong>unemployment</strong>.',
    image: './assets/principle-10.png',
    alt: 'A balance scale comparing rising prices with the number of workers',
    explanation: '在<strong>短期</strong>内，刺激总需求可能降低失业，但同时加大通货膨胀压力；抑制通胀则可能暂时提高失业。',
    example: '经济衰退时，扩张性政策可能增加需求和就业，但如果需求增长过快，也可能推高物价。'
  }
];

const dialog = document.querySelector('#principle-dialog');
const dialogImage = dialog.querySelector('#dialog-image');
const dialogNumber = dialog.querySelector('#dialog-number');
const dialogTitle = dialog.querySelector('#dialog-title');
const dialogExplanation = dialog.querySelector('#dialog-explanation');
const dialogExample = dialog.querySelector('#dialog-example');
const closeButton = dialog.querySelector('.icon-button');
let triggerButton = null;

function openPrinciple(index, trigger) {
  const principle = principles[index];
  triggerButton = trigger;
  dialogNumber.textContent = `PRINCIPLE ${String(index + 1).padStart(2, '0')}`;
  dialogTitle.innerHTML = principle.title;
  dialogExplanation.innerHTML = principle.explanation;
  dialogExample.innerHTML = principle.example;
  dialogImage.src = principle.image;
  dialogImage.alt = principle.alt;
  dialog.showModal();
  closeButton.focus();
}

document.querySelectorAll('.card-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => openPrinciple(Number(trigger.dataset.principle), trigger));
});

closeButton.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener('close', () => {
  dialogImage.removeAttribute('src');
  triggerButton?.focus();
});

document.querySelectorAll('.card-media img').forEach((image) => {
  image.addEventListener('error', () => {
    const trigger = image.closest('.card-trigger');
    trigger.dataset.state = 'error';
    image.alt = 'Illustration unavailable';
  });
});
