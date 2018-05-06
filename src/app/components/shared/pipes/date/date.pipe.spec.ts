import { DatePipe } from './date.pipe';

describe('UrlPipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
});
