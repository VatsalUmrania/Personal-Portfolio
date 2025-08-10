import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ContactCard = () => (
  <div className="h-full overflow-y-auto px-3 sm:px-6 py-4 sm:py-8 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center space-y-4 sm:space-y-8">
      
      {/* Header Section */}
      <div className="text-center space-y-2 sm:space-y-4">
        <motion.h2 
          className="font-black text-xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'm always open to discussing new opportunities
        </motion.p>
      </div>
      
      {/* Contact Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { 
            icon: Mail, 
            label: 'Email', 
            text: personalInfo.email || 'vbumrania@gmail.com',
            href: `mailto:${personalInfo.email || 'vbumrania@gmail.com'}`,
            color: 'from-blue-600 to-blue-700'
          },
          { 
            icon: Phone, 
            label: 'Phone', 
            text: personalInfo.phone || '+91 7045780082',
            href: `tel:${personalInfo.phone || '+917045780082'}`,
            color: 'from-green-600 to-green-700'
          },
          { 
            icon: MapPin, 
            label: 'Location', 
            text: personalInfo.location || 'Mumbai, India',
            href: '#',
            color: 'from-purple-600 to-purple-700'
          }
        ].map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <motion.a
              key={index}
              href={contact.href}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-2xl p-3 sm:p-6 hover:scale-105 transition-all duration-300 group shadow-xl hover:bg-white/10 hover:border-gray-500/50"
            >
              <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r ${contact.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <IconComponent size={16} className="text-white sm:w-5 sm:h-5" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-300 mb-1 text-xs sm:text-sm">{contact.label}</div>
                <div className="font-bold text-white group-hover:text-gray-200 transition-colors text-xs sm:text-sm break-words">
                  {contact.text}
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
      
      {/* CTA Button */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href={`mailto:${personalInfo.email || 'vbumrania@gmail.com'}`}
          className="inline-flex items-center bg-white text-black px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg shadow-xl hover:scale-105 transition-transform space-x-2 sm:space-x-3 hover:bg-gray-200"
        >
          <Mail size={16} />
          <span>Send Message</span>
          <ExternalLink size={14} />
        </a>
      </motion.div>
      
      {/* Social Links */}
      <motion.div 
        className="flex justify-center space-x-2 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        {[
          { platform: 'GitHub', url: personalInfo.social?.github, icon: Github },
          { platform: 'LinkedIn', url: personalInfo.social?.linkedin, icon: Linkedin },
          { platform: 'Portfolio', url: personalInfo.social?.portfolio, icon: Globe }
        ].map(({ platform, url, icon: IconComponent }) => (
          <a
            key={platform}
            href={url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-xl text-white hover:scale-110 hover:text-gray-200 transition-all shadow-lg hover:bg-white/10 hover:border-gray-500/50"
            title={platform}
          >
            <IconComponent size={16} className="sm:w-5 sm:h-5" />
          </a>
        ))}
      </motion.div>
    </div>
  </div>
);

export default ContactCard;
