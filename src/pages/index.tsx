// import { motion, AnimatePresence } from "framer-motion";
import * as React from 'react';
import { useState } from 'react';
// import Nav from '@c/nav';
import Rectangle from '@/primitives/Rectangle';
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
      <Rectangle width={300} height={3} rounded x={10} y={10} backgroundColor="#147FE7" />

      <Rectangle width={300} height={3} rounded x={10} y={20} backgroundColor="#F4C358" />

      <Rectangle width={300} height={3} rounded x={10} y={30} backgroundColor="#A442E6" />

      <Rectangle width={300} height={3} rounded x={10} y={40} backgroundColor="#147FE7" alpha={0.5} />

      <Rectangle width={300} height={3} rounded x={10} y={50} backgroundColor="#F4C358" alpha={0.5} />

      <Rectangle width={300} height={3} rounded x={10} y={60} backgroundColor="#A442E6" alpha={0.5} />

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
