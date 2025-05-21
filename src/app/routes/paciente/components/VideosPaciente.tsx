"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Gimnasia Cerebral",
    file: "https://drive.google.com/file/d/1Zfwr3pCMv_c63GVRSto3sO0nqBSQRrDM/preview",
    thumbnail: "/4.jpg",
  },
  {
    id: 2,
    title: "Estimulación Cognitiva",
    file: "https://drive.google.com/file/d/1oVTlP6QUO1w4S-ECjiT06lMhZgP-CYqv/preview",
    thumbnail: "/4.jpg",
  },
];

export default function VideosPaciente() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-800">
        Ejercicios para tu mente
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
        {videos.map(({ id, title, thumbnail, file }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            onClick={() => setSelectedVideo(file)}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-lg p-3 font-semibold">
              {title}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-5xl opacity-0 group-hover:opacity-100 transition">
              ▶
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-5xl mx-auto">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white z-50"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <motion.div
                key={selectedVideo}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-lg shadow-2xl w-full max-h-[80vh] aspect-video"
              >
                <iframe
                  src={selectedVideo}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                  title="Video Google Drive"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
