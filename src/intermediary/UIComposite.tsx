import React, { CSSProperties, memo } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash/fp';
import Rectangle from '@/primitives/Rectangle';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import { ImmediateAppearance } from 'arpon/ui/ImmediateAppearance';
import { Transform } from 'stream';

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
    <div style={{ ...fixtureCSSConfig(3, 1), justifyContent: 'flex-end' }}>
      <Icon icon="close-fill" scale={0.6} className={'fill-slate-400'} />
    </div>
  );
}

function FixtureLeft() {
  return (
    <div style={{ ...fixtureCSSConfig(1, 2), placeItems: 'center', marginRight: 28 }}>
      <Icon icon="arrow-up-circle-fill" iconSize={28} scale={1} className={['fill-sky-500', 'hue-rotate-30']} />
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
    <div
      className="text-tiny text-slate-400"
      style={{ ...fixtureCSSConfig(2, 2), paddingTop: 16, paddingBottom: 16, lineHeight: 1.4, gridColumnEnd: 'span 2' }}
    >
      Your file is uploading right now. Just give us a second to finish your upload.
    </div>
  );
}

function FixtureBottom() {
  return (
    <div
      style={{
        ...fixtureCSSConfig(2, 3),
        justifyContent: 'stretch',
        alignItems: 'center',
        gridColumnEnd: 'span 2',
      }}
    >
      <Rectangle height={4} style={{ width: '100%', marginRight: '10%' }} rounded backgroundColor="#4086E0" />
      <Button className={['bg-indigo-200/20', 'rounded-md', 'pr-5', 'pl-5', 'pt-2', 'pb-2', 'ml-auto', 'text-white']}>
        Cancel
      </Button>
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
    const wrapperClasses = classNames([kebabCase(UIComposite.name), 'relative']);
    const classes = classNames(['grid', 'text-white', 'z-10']);

    /*
      class ViewController: UIViewController {

      var imageView: UIImageView = {
          let imageView = UIImageView(frame: .zero)
          imageView.image = UIImage(named: "bg_image")
          imageView.contentMode = .scaleToFill
          imageView.translatesAutoresizingMaskIntoConstraints = false
          return imageView
      }()

      override func viewDidLoad() {
          super.viewDidLoad()

          view.insertSubview(imageView, at: 0)
          NSLayoutConstraint.activate([
              imageView.topAnchor.constraint(equalTo: view.topAnchor),
              imageView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
              imageView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
              imageView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
          ])
      }
  }
    */

    /**
   * F
   * @example
   *
    const layout = new UserInterface({
      frame: new Rect(0, 0, 10, 10),
      alpha: 0.6,
      tint: Colors.blue.hexColor,
      clipToBound: true,
      transform: new UITransform({
        a: 0,
        b: 0, c: 0,
        tx: 10,ya
        rotate: 10,
        rotateUnit: Rotate.degree
      }),
      child: new Rectangle({
        frame: new Rect(0, 0, 10, 10)
        color: Colors.red.hexColor,
        transforms: [ new UITransformScale(2), new UITransformRotate(200, Rotate.degree) ]
      }),
      subViews: [

      ]
    });

    UIImageAsset
    UIImageNetwork
    UIImageBase64
    UIImageFileStream

    const imageView = new Image

    layout.insertView()
    layout.insertRelativeView()
    layout.insertStaticView()
    layout.insertAbsoluteView()
    */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ArponSyntax = {};

    // new UserInterface(new Rect(0, 0, 10, 10), new Alpha(0.5), new Transform()); -> this.args instance of

    return (
      <div
        className={wrapperClasses}
        style={{
          background: 'radial-gradient(100% 275.46% at 100% 2.78%,  rgb(31 44 92 / 80%) 0%, #1A1C2BC7 55.8%)',
          borderRadius: 10,
          boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.2)',
          // background: 'url("/assets/placeholder-just-a-minute.png")',
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          padding: '26px 30px',
        }}
      >
        <div className={classes} style={{ gridTemplateColumns: 'min-content auto' }}>
          {/* <div style={{ gridColumn: 2, gridRow: 2, zIndex: 1 }}>
            <svg width="100%" height="100%" fill="none">
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
            </svg>
          </div> */}
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
