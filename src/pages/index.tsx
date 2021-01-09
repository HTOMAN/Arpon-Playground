import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import Nav from '@c/nav';
import Button from '@c/Button';

const style = {
  width: 100,
  height: 4,
  opacity: 1,
}

export const Home = (): JSX.Element => {
  const [isVisible, setVisible] = useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible)
    }, 1500)
  })

  return (
    <>
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
      <Button label="+ Project" onClick={() => console.log('click')} />
    </>
  )
}

export default Home
