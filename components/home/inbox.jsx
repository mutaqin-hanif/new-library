"use client";

import { ChevronLeft } from "lucide-react";
import React from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export default function Inbox({ showInbox = false, setShowInbox }) {
  return (
    <AnimatePresence initial={false}>
      {showInbox ? (
        <motion.div
          className="fixed top-0 right-0 bg-white rounded-lg w-1/2 min-h-96 shadow-md p-2"
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 250, opacity: 0 }}
        >
          <span className="flex gap-x-2">
            <button onClick={() => setShowInbox(false)}>
              <ChevronLeft color="black" />
            </button>
            <h1>Inbox</h1>
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
