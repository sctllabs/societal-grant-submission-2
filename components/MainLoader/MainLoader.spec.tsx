import { render } from '@testing-library/react';
import { MainLoader } from './MainLoader';

describe('MainLoader', () => {
  it('Should render component', () => {
    const { container } = render(<MainLoader />);

    expect(container).toMatchSnapshot();
  });
});
