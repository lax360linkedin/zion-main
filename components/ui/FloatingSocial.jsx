const FloatingSocial = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Zion Group, I would like to enquire about your services.",
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/zionbuilderspromoterss?igsh=MXgzNHBsdjJkbG81dw=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500
        flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-white"
          fill="currentColor"
        >
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.54 4 20 5.46 20 7.75v8.5c0 2.29-1.46 3.75-3.75 3.75h-8.5C5.46 20 4 18.54 4 16.25v-8.5C4 5.46 5.46 4 7.75 4zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      </a>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/918778702982?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center
        shadow-xl hover:scale-110 transition"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
          fill="currentColor"
        >
          <path d="M12.04 2C6.55 2 2.04 6.48 2.04 11.96c0 1.93.51 3.82 1.49 5.49L2 22l4.69-1.5a9.94 9.94 0 005.35 1.56h.01c5.49 0 10-4.48 10-9.96S17.53 2 12.04 2zm5.77 14.11c-.24.67-1.38 1.31-1.91 1.38-.49.07-1.11.1-1.79-.12-.41-.13-.93-.3-1.61-.59-2.83-1.22-4.67-4.06-4.81-4.25-.13-.19-1.15-1.53-1.15-2.91s.72-2.06.97-2.34c.25-.28.55-.35.73-.35h.53c.17 0 .41-.06.64.5.24.59.82 2.04.89 2.19.07.15.12.33.02.52-.1.19-.15.31-.3.48-.15.17-.32.38-.46.51-.15.15-.31.31-.13.6.18.29.8 1.31 1.71 2.12 1.17 1.04 2.16 1.36 2.46 1.51.3.15.47.13.64-.08.17-.21.73-.85.93-1.14.2-.29.4-.24.67-.15.28.1 1.77.83 2.07.98.3.15.5.23.57.36.07.13.07.77-.17 1.44z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingSocial;
