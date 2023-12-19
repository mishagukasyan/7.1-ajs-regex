import Validator from '../index';

test('проверка регулярки', () => {
  const arrNickname = [
    { nick: '_misha123', status: false },
    { nick: 'pokemon12345pikachu', status: false },
    { nick: 'waRRior1234_-boom', status: false },
    { nick: 'Wizard_', status: false },
    { nick: 'demon12', status: false },
    { nick: 'nagibator123nagibator', status: true },
    { nick: 'best-of-the-best', status: true },
    { nick: 'super__chuvak', status: true },
    { nick: 'Nikita123_123Nikita', status: true },
    { nick: 'NeToLoGy__20-21__GrOuP', status: true },
  ];
  for (let i = 0; i < arrNickname.length; i += 1) {
    const user = new Validator(arrNickname[i].nick);
    expect(user.validateUsername()).toEqual(arrNickname[i].status);
  }
});
