import React, { CSSProperties, memo } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash/fp';
import Rectangle from '@/primitives/Rectangle';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import { ImmediateAppearance } from 'arpon/ui/ImmediateAppearance';

type Props = {
  // using `interface` is also ok
  message: string;
} & ImmediateAppearance;
type State = {
  count: number; // like this
};

const fixtureCSSConfig: (x: number, y: number) => CSSProperties = (x: number, y: number) => ({
  gridColumn: x,
  gridRow: y,
  display: 'flex',
  zIndex: 'inherit',
});

function CloseButton() {
  return (
    <div style={fixtureCSSConfig(3, 1)}>
      <Icon icon="close-fill" className={'fill-slate-400'} />
    </div>
  );
}

function FixtureLeft() {
  return (
    <div style={{ ...fixtureCSSConfig(1, 2), placeItems: 'center' }}>
      <Icon icon="arrow-up-circle-fill" iconSize={24} scale={1} className={['fill-indigo-400']} />
    </div>
  );
}

function FixtureTop() {
  return (
    <div style={{ ...fixtureCSSConfig(2, 1), fontVariationSettings: '"wght" 500' }}>
      <h6>Just a minute...</h6>
    </div>
  );
}

function FixtureCrumb() {
  return (
    <div className="text-tiny text-slate-400" style={fixtureCSSConfig(2, 2)}>
      Your file is uploading right now. Just give us a second to finish your upload.
    </div>
  );
}

function FixtureBottom() {
  return (
    <div style={{ ...fixtureCSSConfig(2, 3), justifyContent: 'space-between', alignItems: 'center' }}>
      <Rectangle height={3} rounded backgroundColor="#4086E0" />
      <Button className={['bg-red-500/[0.31]', 'pr-5', 'pl-5', 'pt-2', 'pb-2', 'text-white']}>Cancel</Button>
    </div>
  );
}

/* function CancelButton() {
  return (
    <div style={{ gridColumn: 3, gridRow: 3 }}>
      <Button>Project</Button>
    </div>
  );
} */

const LEFT = memo(FixtureLeft);

const TOP = memo(FixtureTop);

const TOP_RIGHT = memo(CloseButton);

const CRUMB = memo(FixtureCrumb);

const BOTTOM = memo(FixtureBottom);

// const BOTTOM_RIGHT = memo(CancelButton);

class UIComposite extends React.Component<Props, State> implements ImmediateAppearance {
  public readonly fixtures: UIComposite[] = Array(9);

  backgroundColor?: string;
  isHidden?: boolean;
  alpha?: number;
  clipToBounds?: boolean;

  state: State = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    const wrapperClasses = classNames([kebabCase(UIComposite.name), 'relative', 'p-5']);
    const classes = classNames(['grid', 'text-white', 'gap-3', 'z-10']);

    return (
      <div
        className={wrapperClasses}
        style={{
          background: 'radial-gradient(100% 275.46% at 100% 2.78%, #1F2C5C 0%, #1A1C2B 55.8%)',
          borderRadius: 10,
          boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className={classes}>
          <div style={{ gridColumn: 2, gridRow: 2, zIndex: 1 }}>
            {/* <svg width="100%" height="100%" fill="none">
              <rect width="100%" height="100%" rx="8" fill="url(#paint0_radial_420_2)" />
              <defs>
                <radialGradient
                  id="paint0_radial_420_2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(389 0) rotate(0) scale(424 540)"
                >
                  <stop stopColor="#1F2C5C" />
                  <stop offset="0.5" stopColor="#1A1C2B" />
                </radialGradient>
              </defs>
            </svg> */}
          </div>
          <CRUMB />

          <LEFT />
          <TOP />
          <TOP_RIGHT />
          <BOTTOM />
          {/* <BOTTOM_RIGHT /> */}
        </div>
      </div>
    );
  }
}

export default memo(UIComposite);
