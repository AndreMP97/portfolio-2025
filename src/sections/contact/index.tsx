import { urls } from "constants/urls";

export const ContactSection: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-8">
      <div className="rounded-lg border border-[#172A45] bg-[#112240] p-8 shadow-xl transition-colors duration-300 hover:border-[#64FFDA]">
        <h2 className="mb-6 text-center text-3xl leading-tight font-bold tracking-tight text-white">
          Get In Touch
        </h2>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-lg leading-relaxed font-normal text-[#CCD6F6]">
            {" "}
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Feel free to reach
            out!{" "}
          </p>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
            <a
              className="flex items-center justify-center gap-4 rounded-md border border-[#64FFDA] px-7 py-4 text-lg leading-normal font-medium text-[#64FFDA] transition-colors hover:bg-[#52D8C9] hover:text-[#0A192F]"
              href="mailto:alex.dev@example.com"
            >
              <div
                data-icon="EnvelopeSimple"
                data-size="28px"
                data-weight="regular"
              >
                <svg
                  fill="currentColor"
                  height="28px"
                  viewBox="0 0 256 256"
                  width="28px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V78.43l84.43,79.66a8,8,0,0,0,11.14,0L216,78.43V192ZM213.57,64l-85.58,80.78L42.43,64H213.57Z"></path>
                </svg>
              </div>
              <span>alex.dev@example.com</span>
            </a>
            <a
              className="flex items-center justify-center gap-4 rounded-md border border-[#64FFDA] px-7 py-4 text-lg leading-normal font-medium text-[#64FFDA] transition-colors hover:bg-[#52D8C9] hover:text-[#0A192F]"
              href={urls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                data-icon="LinkedinLogo"
                data-size="28px"
                data-weight="regular"
              >
                <svg
                  fill="currentColor"
                  height="28px"
                  viewBox="0 0 256 256"
                  width="28px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </div>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
