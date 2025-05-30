import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPinterestP, FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


function SocialIcon({ socialIconsData, type='footer' }) {
  return (
    <ul className="flex items-center gap-3">
      {socialIconsData?.map((icon) => (
        <li key={icon?.profile_link} data-aos="fade-in" data-aos-delay="100">
          <Link to={`${icon?.profile_link}`} className={`social-icon ${type === 'footer' ? '!text-white' : 'text-headingColor'}`}>
          {icon?.social_media === 'facebook' ? (
            <FaFacebook />
          ) : icon?.social_media === 'pinterest' ? (
            <FaPinterestP />
          ) : icon?.social_media === 'tiktok' ? (
            <FaTiktok />
          ) : icon?.social_media === 'instagram' ? (
            <FaInstagram />
          ) : icon?.social_media === 'youtube' ? (
            <FaYoutube />
          ) : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcon;
