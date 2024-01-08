import '../App.css';

export default function Menu() {
  return (
    <div className="barraLateral">
      <h3>
        Task<strong>List</strong>
      </h3>
      <div className="icones">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 0L0 12.8571H3.75V30H11.25V21.4286H18.75V30H26.25V12.7286L30 12.8571L15 0Z"
              fill="white"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M26.3625 0L15 11.25L11.25 7.5L0 18.8625L3.75 22.6125L11.25 15L15 18.75L30 3.75L26.3625 0ZM0 26.25V30H30V26.25H0Z"
              fill="white"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M0 0V5L15 15L30 5V0H0ZM0 10V30H30V10L15 20L0 10Z"
              fill="#FBFBFB"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M0.042796 0V7.5H30V0H0.042796ZM0.042796 11.25V29.6625C0.042796 29.85 0.21398 30 0.42796 30H29.572C29.786 30 29.9572 29.85 29.9572 29.6625V11.25H0H0.042796ZM4.3224 15H8.602V18.75H4.3224V15ZM12.8816 15H17.1612V18.75H12.8816V15ZM21.4408 15H25.7204V18.75H21.4408V15ZM4.3224 22.5H8.602V26.25H4.3224V22.5ZM12.8816 22.5H17.1612V26.25H12.8816V22.5Z"
              fill="#F9F9F9"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M0 0V7.5H7.5V0H0ZM11.25 0V7.5H18.75V0H11.25ZM22.5 0V7.5H30V0H22.5ZM0 11.25V18.75H7.5V11.25H0ZM11.25 11.25V18.75H18.75V11.25H11.25ZM22.5 11.25V18.75H30V11.25H22.5ZM0 22.5V30H7.5V22.5H0ZM11.25 22.5V30H18.75V22.5H11.25ZM22.5 22.5V30H30V22.5H22.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="exit">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M15 0V5.71429H35V34.2857H15V40H40V0H15ZM20 11.4286V17.1429H0V22.8571H20V28.5714L30 20L20 11.4286Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
