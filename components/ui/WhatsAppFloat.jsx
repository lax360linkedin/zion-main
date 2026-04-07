import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phone = "917373080790"; // change later
  const message =
    "Hello Zion Group, I would like to enquire about your services.";

  const url =
    "https://api.whatsapp.com/send?phone=" +
    phone +
    "&text=" +
    encodeURIComponent(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 text-white
        p-4 rounded-full shadow-lg
        hover:scale-110 hover:bg-green-600
        transition-all duration-300
      "
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppFloat;
