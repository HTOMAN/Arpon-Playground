// import { motion, AnimatePresence } from "framer-motion";
import * as React from 'react';
import { useState } from 'react';
// import Nav from '@c/nav';
// import Rectangle from '@/primitives/Rectangle';
import UIComposite from '@/intermediary/UIComposite';
// import Button from '@/components/Button';
// import UIElement from '@/elements/UIElement';

// const style = {
//   width: 100,
//   height: 4,
//   opacity: 1,
// }

export const Home = (): JSX.Element => {
  const [isVisible, setVisible] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 1500);
  });

  return (
    <>
      <div
        style={{
          margin: 10,
          outlineColor: 'transparent',
        }}
      >
        <UIComposite message="Hello" backgroundColor="" />
      </div>

      {/* <Rectangle width={500} height={3} rounded x={10} y={10} backgroundColor="#4086E0" /> */}

      {/* <Rectangle width={300} height={3} rounded x={10} y={20} backgroundColor="#F4C358" />

      <Rectangle width={300} height={3} rounded x={10} y={30} backgroundColor="#A442E6" />

      <Rectangle width={300} height={3} rounded x={10} y={40} backgroundColor="#147FE7" alpha={0.8} />

      <Rectangle width={300} height={3} rounded x={10} y={50} backgroundColor="#F4C358" alpha={0.3} />

      <Rectangle width={300} height={3} rounded x={10} y={60} backgroundColor="#A442E6" alpha={0.1} /> */}

      {/* <UIElement message="Hello UI Element" /> */}
      {/* <Nav /> */}
      {/* <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
            style={style}
            className="bg-secondary rounded"
          />
          )}
      </AnimatePresence> */}
      {/* <Button
        icon="file-add"
        className={['bg-white', 'text-black', 'rounded-2xl', 'btn-project', 'py-4', 'px-10']}
        onClick={() => alert(1)}
        style={{
          position: 'fixed',
          bottom: 62,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        Project
      </Button> */}
    </>
  );
};

export default Home;
