export const profile = {
  name: "Okechukwu Ekene Godwin",
  displayName: "Ekene",
  role: "Frontend Engineer",
  location: "Lagos, Nigeria",
  timezone: "GMT+1",
  yearsExperience: 4,
  email: "kenesongodwin@gmail.com",
  github: "https://github.com/GodwinOkechukwu",
  linkedin: "https://www.linkedin.com/in/okechukwu-godwin-103818239/",
  whatsappNumber: "23408158212395",
  whatsappMessage:
    "Hi, I just checked your portfolio and I'd like to work with you",
  cv: "/Ekene_Godwin_CV.pdf",
  stats: [
    { target: 4, suffix: "+", label: "Years exp." },
    { target: 8, suffix: "+", label: "Projects shipped" },
    { target: 10, suffix: "+", label: "Clients served" },
    { target: 98, suffix: "%", label: "On-time delivery" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
  profile.whatsappMessage,
)}`;
