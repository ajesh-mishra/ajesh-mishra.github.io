export default function Experience() {
  const experiences = [
    {
      date: "Jan 2020 ",
      name: "Platform Engineer | Barclays",
      description: `Worked on setting up of new file transfer connections along side automating daya to day activities using Python and Cloud Technologies.`
    },
    {
      date: "Feb 2019 - Jan 2020",
      name: "Lead Infrastructure Engineer | BNY Mellon",
      description: `I mostly worked on Connect:Direct Migration from a legacy unsupported FTP application.
      Worked on Connect:Direct applications installed on both Linux and Windows.`
    },
    {
      date: "Jan 2017 - Feb 2019",
      name: "Senior Consultant | Capgemini",
      description: `Maintained and supported the Managed File Transfer Estate. 
      The job involved activities like renewing Connect:Direct certificates, 
      Upgrading various tools, 
      working on POC of new strategic solutions,
      as well as Incident and Problem Management`
    },
    {
      date: "May 2015 - Jan 2017",
      name: "Application Developer | IBM",
      description: `As a Sterling Consultant, I mostly worked on Connect:Direct Migration from a legacy unsupported FTP application.
      Worked on Connect:Direct applications installed on both Linux and Windows.`
    },
    {
      date: "Dec 2013 - May 2015",
      name: "Systems Engineer | Accenture",
      description: `As a Sterling developer my role was to set-up new file transfer connectivity.
      Worked on IBM MFT Tools like Sterling Integrator, Sterling FIle Gateway and Connect:Direct`
    },
    {
      date: "Dec 2010 - Dec 2013",
      name: "Systems Engineer Analyst | Tata Consultancy Services",
      description: `I was part of iON project and was responsible for supporting and maintaining High Avalability in the QA environemnt. 
      The technology stack involved the application (JBoss) and DataBase (MySQL).
      This involved new code deployment on Jboss and data migration and replication in MySQL.`
    }
  ];

  return (
    <div className="dark mx-auto max-w-5xl my-10 md:my-16 px-2 sm:px-8">

      <div>
        <span className="text-fluent-30 text-2xl font-semibold">Experience</span>
      </div>

      <br />

      <div className="px-2 sm:px-16">
        <ol class="border-l border-neutral-300 dark:border-neutral-500">
          {experiences.map((experience, index) => (
            <li>
              <div class="flex-start flex items-center pt-3">
                <div
                  class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p class="text-sm text-neutral-500 dark:text-fluent-110">
                  {experience.date}
                  {index === 0
                    ? <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">present</span>
                    : <span></span>
                  }
                </p>
              </div>
              <div class="mb-6 ml-4 mt-2">
                <h3 class="mb-1.5 text-l font-semibold text-fluent-70">{experience.name}</h3>
                <p class="mb-3 text-neutral-500 dark:text-fluent-110">
                  {experience.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}
