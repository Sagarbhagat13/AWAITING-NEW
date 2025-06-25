interface WhatsAppMessageData {
  tripName: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  numberOfPeople: string;
  batchDate?: string;
}

const BUSINESS_WHATSAPP_NUMBER = '919137798539'; // From FloatingInfoButton

export const formatWhatsAppMessage = (data: WhatsAppMessageData): string => {
  const message = `🏔️ Hi! I'm interested in ${data.tripName}

My Details:
👤 Name: ${data.userName}
📱 Phone: ${data.userPhone}
✉️ Email: ${data.userEmail}
👥 Travelers: ${data.numberOfPeople}
${data.batchDate ? `📅 Preferred Date: ${data.batchDate}` : ''}

Please share detailed itinerary, pricing, and availability. Looking forward to an amazing adventure! ✨`;

  return encodeURIComponent(message);
};

export const openWhatsApp = (messageData: WhatsAppMessageData): void => {
  const encodedMessage = formatWhatsAppMessage(messageData);
  
  // Detect if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  const whatsappUrl = isMobile 
    ? `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${BUSINESS_WHATSAPP_NUMBER}&text=${encodedMessage}`;
  
  // Open WhatsApp in new tab/window
  window.open(whatsappUrl, '_blank');
};
