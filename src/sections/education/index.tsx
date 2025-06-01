export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="group relative rounded-lg p-5 transition-shadow duration-300">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="text-aqua-mint">
              <svg
                className="bi bi-mortarboard-fill"
                fill="currentColor"
                height="24"
                viewBox="0 0 16 16"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L16 6.464a.5.5 0 0 0 .025-.917z"></path>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"></path>
              </svg>
            </div>
            <h3 className="text-xl leading-normal font-semibold text-white">
              Bachelor of Science in Computer Science
            </h3>
          </div>
          <div>
            <p className="text-lavender-blue mt-1 text-lg leading-normal font-medium">
              State University |{" "}
              <span className="text-dusty-blue">2014 - 2018</span>
            </p>
            <p className="text-lavender-blue mt-2 text-base leading-relaxed font-normal">
              Major concentration in Web Development and Software Engineering.
              Graduated with Honors (Cum Laude).
            </p>
            <div className="mt-3">
              <h4 className="text-md text-aqua-mint mb-1 leading-tight font-semibold">
                Key Courses:
              </h4>
              <ul className="text-lavender-blue marker:text-aqua-mint list-inside list-disc space-y-1 text-base leading-relaxed font-normal">
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Web Design</li>
                <li>Database Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative rounded-lg p-5 transition-shadow duration-300">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="text-aqua-mint">
              <svg
                className="bi bi-patch-check-fill"
                fill="currentColor"
                height="24"
                viewBox="0 0 16 16"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
            </div>
            <h3 className="text-xl leading-normal font-semibold text-white">
              Certified Front-End Web Developer
            </h3>
          </div>
          <div>
            <p className="text-lavender-blue mt-1 text-lg leading-normal font-medium">
              Code Academy Pro | <span className="text-dusty-blue">2019</span>
            </p>
            <p className="text-lavender-blue mt-2 text-base leading-relaxed font-normal">
              Completed an intensive bootcamp focused on modern front-end
              technologies.
            </p>
            <div className="mt-3">
              <h4 className="text-md text-aqua-mint mb-1 leading-tight font-semibold">
                Skills Acquired:
              </h4>
              <ul className="text-lavender-blue marker:text-aqua-mint list-inside list-disc space-y-1 text-base leading-relaxed font-normal">
                <li>HTML5, CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
