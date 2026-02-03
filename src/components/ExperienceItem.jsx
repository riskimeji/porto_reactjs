const ExperienceItem = ({
  year,
  period,
  logo,
  company,
  companyUrl,
  role,
  description,
  skills,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-md hover:bg-[#24355c49] transition-all">
      {/* TOP / LEFT (Mobile: top | Desktop: left) */}
      <div className="md:w-32 shrink-0 text-sm text-slate-400 flex flex-col items-start">
        <div className="mb-2">
          <p>{year}</p>
          <p className="whitespace-nowrap">{period}</p>
        </div>

        <img
          src={logo}
          alt={company}
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <a
          href={companyUrl}
          className="text-[#E2E8F0] hover:text-[#5EEAD4] text-base font-medium"
        >
          {company}
        </a>

        <p className="text-[#64748B] text-sm mt-1">{role}</p>

        <p className="mt-3 text-sm leading-relaxed">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs px-4 py-1 rounded-full bg-[#122B39] text-[#5EEAD4]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
