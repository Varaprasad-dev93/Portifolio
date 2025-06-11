import React, { useState } from 'react';
import Main from '../3dAnimations/Main';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Loader, SendHorizontalIcon, Snowflake } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Div = styled.div`
  margin-top: 15%;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20%;
    margin-left: 10%;
  }
`;

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILSERVICEID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILTEMPLATEID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLICAPIKEY;

  const sendEmail = (formData) => {
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendEmail(formData);
      toast.success('Mail sent successfully!! 🤗');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong! 😥');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <Div className="w-[50%]">
         <motion.div
          className="mt-12 w-full flex flex-col items-center justify-center text-center p-6 rounded-xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-white/30 to-white/5 blur-md animate-pulse"
              aria-hidden="true"
            />
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFxgaGBcXFxcaGBcaFx8XFxoYFxgaHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tKy0tLS0tLS0tLS0tKy0tLS0tLSstKy0tLS0tKy0tLS03LSstLS0rLSsrKysrK//AABEIAMcA/QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA8EAABAwMBBQUGBQMEAgMAAAABAAIDBBEhMQUSQVFhBhMicYEykaGxwfAHQlLR4RQjgmJywvGSshUWQ//EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAHREBAQEAAwEAAwAAAAAAAAAAAAERAiExQRJRYf/aAAwDAQACEQMRAD8A8sBSPKRI51yvS0VK1NIT2JJzVJL71EE8FRTQ6KxgacIOCI6q6o4dOqDiNwPPKi3DfmrQ0hGeaaabgVHAkYKsIWu6dFWz1oYbNAJ+C5u3nD/82+hKgvxESEPLEbfIqui7TP8A0N+OFz+0D7+wwjpfRGASQhZ2qaDbUbsFhB6C4+CWSeN3skZ4cfcVYUdM6+EUYja9rqONhvhTS5CsQZ4S7vRK2IFdohJmGx/ZPLwgzNdc2TmE4sGmS+iGkapmBNeChIr2S71khCVOJ1/PomFykcPem7l1VGuaoXjmpX4UJ0zqohnNTHKWcod5PJKUbR1skCcCm2Sw4ZKkHxTQn76cMP3VNBEmRn/pH0jboImki4q7oaUkg/fBV1IFexTBovyRSL7gbulzwVPtiRkeA67je9tQiJdrMb7RNraAXVc6oikOGG5569AOpVB9U0YGp8014v5fBWdZTC+6DkflGT6lASROBtuhKQbhJsPek7t3K/VWmz9lTSOFmmx9AttsbskB7YCNLzGx14pCT6r16r7HwFtg0A8CBZeebf2M6B5xj6InIdK6m2m9mCbjkforeCsbJctweSzzyDquY+2QbELSaZnqmyOuFBs6q3xY6j49VPLHcoKEWAspQwWUe7hS04Uk0Atqi3NFroXu+KkZojQjf5LnRgc9EWxoIUT7pSBwwo3FTPksEI6VS02RijcbKR8ih7xSoeRREhLI5QuddR1TlddNJSApc0gclBUae3VRTMfZH0k6rVIx+dUtNHTzgBWOyYHzvAa0kH4/ssxHMvZuwOxu6ga9w8ThcdAf3Wb0Z/QVH2HYMu8TjqeA8gppOyOQWgDGoxotq1ikEa59j8mN/wDqAIzujnYZ9Spo+y0Dfy3I4laxzUJUdFaNqtjpGM0aEj3WzdPqXffNVz5EaBBnzqqDtRQ97GefA/RGum5aplQ64I0GfVSeSVVE9pyNEI4WWt21TEb17EYP0/ZZidtzjF11laNppy0gg2WippRI0H3rLkWVrsKY3LeCUuGx4UrYb+acI/8AtSR3CzpMa0p5bxUgZjRc8WQkO8kudDyT926eWqWAXtzm6FeUXUtIzqg3u5pipr5FA8pHO5pAlIXhDuRbm8VDI3mpYoiuCUpEuZQUrUic0qMKXJQkIulaorfs5T97UQx/qe0emp+AX0ZTsDQANBbC8G/DaIHaEF+Befcx696aufOm+J2lPcVCxPRKyR7sIKYouTRByNKKFXUuAuqyeT+FZ1IyVVzNKIZEBPFMncSMJ0mL3UfeYVWsZbaMLy65xr6rJ1hyfP7K9L2rA17DfXovNaxoJIvldONIWUIvYsv9z0Q1JTvkkbGwbznGwA+9FtKfsSIAHz1TGO/SGk29b3PuTbgLA6/35IpjcZQ89E+FwDiCDljmnwuHRSGTGEelzpR+6YDvKF5zlLDx4KQkffRRuOVEX244Te+BUSVD8FVsrx1RNVlVskv35KTnhcoN/mnErQSEWQ0r0peVG5qkqE1OCRLmROBSJVFzmpV11wUmk/D6fc2hTk8XkH/Jrh8yvoGMr5k2dUmKWOQfke13uIP0X0pSzbwBGhAPvysc417BrE5yi74BQvqRZYZwS/RByu1TJanBK8/7WbVm9iKQtN8kGys1Y0m0tqQx+28DzIVBXdsKZuh3vLK88mpXvf4nl7idBcknkLo98MEEQc6LffvbpBcSGutextgHpdb/ABjWNDN2vhdwP1HojaWtZI27SD9FijUGwJg3GuvY21trbGVf7CitoRnhp8EWQyNA4XBHzWH2n2ckFywh1z5W963rI+KimiwVncTM9ldlupnSSPAL93w5wL3J+SseyUkk29NNc3PhBOCOg6HCKq4XvjLWYORfncEa+qouyEUrb/pDrG/A9OiZ2q0/aGPepDjxQvJHQGwI9x+Cy8TsLSdoH7sFQL/lZ7ySPosbTVCeMCyIF1xcoP6hc6bRONFkeg3PGvoiXSXFreSEnbyViS/1lm/VVcz8ohwTjBfJTiBjinAIkQhIYEoG5tlFcomcWQu7dQVi6y5cAlhzl1ku6uaVI1LdcQmqSQFexdku1jP6Fr5D4o/7ZHFxAx7wF40tN2EcHzGF1t19iAdCW/wT7kVri1G2u1lTOC2Nro2fq0xxNyu7O9ohD4ZJSb8Tci/mjXMM1T/TtDWtYdSLtFgDcjR7rkADTUlUNX2arpZg10RwLGTeO47PtG5sP9rQs7Gs/T1eieJYt5pBB4jK867VR2cV6H2Y2cYKcRkg24hZztFRBz8rG5R9Y/YnZaWQNkBAB9o3sWtv7I/1ELQ9oezlPNu2a5jmAAblrOA0weOTlF7KJYNwaK8p6cm2irya1k6bYEbQ3wGzdC43PX4+SsYtmNFnAe5aN1GOKFqSLWQFW4c1EdDhES2Q0jsH6KEDNnLQTxGfXW11T9m6d8TXzTndbcu3dSTk6KwrnWY/F8H5KFlTDG0G7XE2NgUxYE7V1pbE1rrb8x33D9LR7LT981lI5B/Ck7QVbnzl7jrgDkOA++aGjXTj1ANjnRDHnigIynb55pKy3xqoHDzyU2nk+Csaanvk4ss6QbYeBUxixZHzUtjf1XRMGnHKNKtezyCjPIo2eGyrpnm5VKkFSwoGRmcqwkeg5clbgVBSApdEinM8JGhNBTgUklkhTrpjlBymo6gxva9uHNII8woE9hUnveyII5WNqG4MjWuuOoF1ZxQ25nzufms7+E9aJKIMOsTi23Q+Jvzt6La92AuNnbdpaTQrO7cZZ3vWjpzgrO9oqhjTYkKo+qfvgNBxWjoZbtB6LF1ddGQbPGOCv+ydVvwg3vr8EGrl7yq6duqPePiq+peUIBKcqCQfypnjxKKYYUgFboeqy9Swb+nktFWO1HxWfqW+NbhVm12XbccD65whoXC2i13Z3s8aqQtN+7AO84c+AVDtzYr6SZ0T721a79Q4FOzwBQFLE26Y04U0bUrRdDT5F1fU0PhVTSg6DmtFsyC4ydFm0gqhvPBQkkav6qFpVbJGFiU6rqh9m34qpl1VtOy+Cq6eM81uADMfVCEouRqFecrWhVOXFOcEjVtgwJQlIToghRzWpr2IhrF0kaSGDV1k9oSEITafhftbuasRk+GYbv8AkMtPzHqvat9fNNLIWuDgbFpBB5EZ+a+hdi1raiCOYaPaD5HiPfdc+cJ20BJunugCfOy847SQVDyAQ65JwP3XqV1EaUHOMLO4pjyvZHY+R9i+7Rx5lbuiphAxrBYABF7Sr44hk5HIX+OizG0O0zH+GNj3u47ouq9lpH1QI6oGR99NCs5Ruqy7xMaAeDj4h5gK4u4CzhrxRZFDZZc4QlTLbTWy6WTU9EFPNxUUFVJm2h+7IdtM6WZrGC7jw+p6BRiUudjPAcyTovRuyuxBC3edmVw8R5D9I6LVuDxYbF2Y2njDG+bjxJ4lU/4gbEFTTutYSRguYfLUeq1dlj/xB28KancAf7soLYx/7P8AID4kLGM79eMU1QQbFW9Mb4++qzquNjVILgDquqlaWlhIKu6KTCrqZ2gRbDYclzraeQ4VdI4EYPNEVB8NyeapLnOURCpBz1VbVM1Urp7qKQ3WoQDuSHljyi5raH0Qz3LbKkIXALk9i3GDN1TwsU8UN8WRYosYU0EEYTJGKy/p7IarZnCLUrnCyYETPH0UDWpCVgXqP4WbYuHUrjkeJn/Jo+B968wjGVYUNc+GRssZs5puP56cEWaY9v2tVGMXALs4AQzKad53u8ZGD+q7z6WIAT9m17KuFkreIyOLXcWlEzMJFs+i43oxSVWwYAS+pmdKNQ02Y31A1QEtW1x3IWhrcW3W2A6X4q2PZUSOu5xN+dyrOm2JHEPCPeo6p6UHl6qSpsRdWcr2i+FR7Rq25zhHqVdc8A50VBVVF/Z/7Uu0qtzzutuT0Wm7MdntwCSUePVrT+Xqeq15Ed2R7PFlppR4vytP5ep6/JbemCDjR8IsFli3Q+169kET5ZDZrQSf2HU6L5/7SbZfVzulfgaNbwY0aAfXqtR+KHajv5P6eJ39qM+Ij87x8w3TzusCtyMlTonWNxqNEwhctJs9ibQDwP1cVdB/XzXnNHUmNwIK1FHtZrrfFZsb41eucFUVDBkoh1WCoHvFjjoFnxtC0XCFkOUQJbYUcp5J7ACZ2UI5pOhKLkQkl74W4FW1yngbcqINRdOMrdZgyNlkbFgXOQmwNRT2+FZaRbl88VX1Ayj2tsonQXJUlZK3VQNaFaTUpHVAvaFCo7hNBynTWBsmhaDRdku0T6SS48Ubrb7T8xycF7Fs3aEczBJG4OYfeOhHAr5+Y5XPZ/tFJSyb7MtPtMOjgPkeRWLNL3aSpsq+t2iANVkpe39M5l7va79Lmn5tuCotl1ArTJ3cl+7bvFoBBN721GdFjKoI2htq9wL3VP3c0r93S/Djb9kbR7NnnaO6Z3LLm73DxeTQVq9lbHjgZutFzxccucepRuNXoDsfYDIfERvP/UeHkrreTmtynshWWdPpmrPfiH2l/pYdxh/vSghv+lv5n/QdfJaOrqGQxPlkNmMaXOPQfU6LwHtBth9VO+d/5j4W39ho9lo8h8brXGM1WuKaE7dSLYIE4hK0KQjHmpId1OjJBwn2SFSGQ1x4lWUdXhZ8hSRT7uOCjKu3SXN/vkmOJN1DBOCMJ4fhTemOcoN9SylCvCYgTSpYMIdhF0TTt0WtYiyik8OER/UaBBiMLjGeCGhjZsKSmcM9UAw2wjIG3UUs7rDTUIOSAFF7osh5QhUFLAoe5BU73ElMaFpkORYpCE+YqAuvqgFAW2/Cyq3awt4PjcPVu64fIrEN6LRdi6ru62nc7Tf3fR4LfqimevemtFtEhjCio3OtZ1vaNiOLb+G/WyIC5Kou6Cka2yc5RSShoJOAASTyAySpl51+MG2bNjpGHLrSSf7R7APmQT/iF5YArLb20TVVEs5/O7F+DRhg9GgIPc6Aeq3OlnaLdKXdThyx53TrDolG7qQdFI+wGo00yomo1JARf6JllzdfVLvJRkgKaAnlRXUjmvI0RcU98IByY56ktHyHgo3OQsU/NPc6/FLWgi5SMlsoUqWRjaw6cURS1nByrFJGSkxfwsBuQjaVvG6oaVzgcK7ih3tNUVuJnWPEYVfUNtlHOiIQtS+/BSASuTAcKSZuNENKoIydUwriU26mT2lG7LcTLHbUvaB5kgfVAa2U0UhDmkaggjzBugx7KyskpTvzS7sbSAWm7g6/K2ltb9FsoZA4BzTcEAgjQg5BC80pKI1MbZt/evY7hJ8W6Bew9LK47H9qKcyCkYHMwdwO0BBzGD8QPMLGNWNssr+JG0e6o3MB8Ux7sf7dXn/xFv8AJagryz8S6/vKgRjLYhbzefE7/iPRTDCPj3ddeXLqVDvA8h1zlS1GbjPXrjQdEC9xDr3sfzC2ByaPRbOCnP5f+v30Tg5xNwXHra33qhSx5zZ+6dDe17cghpaoNwWnT9ZuTqD802IVUuN7G975vZStZe3nrwVW15cb5ACtKZ5GvPNvefhhGCQ9wABH2B/KiJF1HVTXNx99PIBCxyG+psf5VhsGEqIjCijlyAfvH8JwdgFGMucVGXJJH2vdDCS6cQlObNbVB96mukCBotcuXJaOY1Ftg0XLkqDqOIZurykZYArlym5RNe27VRusSuXKWm1IACr5m+5cuTUHumrlyGK4FFUcW8fVKuQm+2K6SSOKFr93u3eAjgXHJWcNOf8A5ARseSe+A39CSHZd0yCuXLP1v49tmrBHG97tGNc4/wCIJPyXilfUOkeXv1cS53rlcuRxX0DVR6iwyMf6QePmq4wXscC7TY62AxfzSrluJTPc99/EbNAGvAn9yioaNoIOti4m/JtrD3rlyWU0cZbfGuDpwG+R63ATnNIF/P8Ac/HCVcooJBdt+J19NfmE2OPNvKy5coQj2ZHW6ilebWXLlVUO911E5KuQzSqIuXLlRP/Z"
              alt="Napoleon Hill"
              className="relative z-10 w-16 h-16 object-cover rounded-full border-2 border-white shadow-md"
            />
          </div>
          <p className="text-white italic text-sm md:text-base max-w-lg mt-4">
            “Success comes to those who become success conscious.”
          </p>
          <span className="text-gray-300 text-xs mt-2">— Napoleon Hill</span>
        </motion.div>
        <h1 className="text-gray-300 text-4xl !pl-10 !pt-10 flex items-center gap-2">
          <Snowflake className="animate-bounce" />
          Let's Connect!!
        </h1>

        {/* Email Form */}
        <div className="w-full !pt-20">
          <form onSubmit={handleSubmit} className="flex w-full flex-wrap gap-y-7 justify-center">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Enter Subject"
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300"
            />

            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="overflow-y-scroll custom-scrollbar w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className={`flex items-center justify-center self-center bg-orange-500 text-white !p-2 rounded w-50 hover:text-gray-400 ${
                isSending ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isSending ? (
                <Loader className="animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <SendHorizontalIcon />
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Quote Block */}
       
      </Div>

      <Main />
    </div>
  );
}
