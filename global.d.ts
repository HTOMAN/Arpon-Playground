type Alignment = 'start' | 'center' | 'end';

interface ComponentView {
  // Fixture value
  value?: () => Component | any;

  /* If Value is component, set its props like:
   * props: {
   *   checked: true,
   * },
   */
  props?: object;

  /* If Value is component, set its events like:
   * on: {
   *   change: () => console.log('change'),
   * },
   */
  on?: object;
}

interface Fixture extends ComponentView {
  // Styles
  style?: object;
  wrapperStyle?: object;
  contentStyle?: object;
}

interface DefaultRowProps {
  // Action when selected with touch, keyboard action, or shortcut.
  onSelected?: (item) => {};

  // The keyboard shortcut
  shortcut?: number | string;

  // Row top level style
  wrapperStyle?: object;

  // Row content container style (don't include and/start fixtures container)
  contentStyle?: object;

  // If row should highlighted or not
  highlightSelect?: boolean;

  // The highlight color
  highlightColor?: string;

  // If the row should have minimal spaces
  small?: boolean;

  // Vertical items align
  align?: Alignment;

  // Useful to put anything before the label
  startFixture?: Fixture;

  // If you dont want work with labels, you can inject your own main content in the row.
  customView?: ComponentView;

  // Row labels
  label?: {
    value: string;
    description?: string;
    style?: object;

    // Anything immediate before label. Can be a function that will pass a row position, plain text or a Fixture object
    prefix?: (position) => {} | string;
    prefixStyle?: object;
  };

  rightLabel?: {
    value: string;
    description?: string;
    style?: object;

    // Anything immediate next to righLabel. Can be a function that will compute some value, plain text or a Fixture object
    sufix?: () => any | string | number;
    sufixStyle?: object;

    // To use component instead plain content in sufix, set it true
    sufixUseFixture?: boolean;
  };

  // Useful to put anything after the label or rightLabel block
  endFixture?: Fixture;
}
