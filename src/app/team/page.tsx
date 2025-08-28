import Image from "next/image";
import { teamMembers as allTeamMembers } from "@/data/team";
import { TeamMember } from "@/types/member";
import Link from "next/link";

export default function TeamPage() {
  // Define teams in the correct order with their display names
  const teamsWithHeaders = [
    { key: 'board', header: 'Board Members' },
    { key: 'team heads', header: 'Team Heads' },
    { key: 'member', header: 'Members' },
    { key: 'advisory', header: 'Advisory Board' },
    { key: 'alumni', header: 'Alumnis' }
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Team Section */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Team
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Meet the passionate individuals of Aachen Blockchain Club.
          </p>

          {teamsWithHeaders.map(({ key: team, header }) => {
            const teamMembers = allTeamMembers.filter(
              (member: TeamMember) => member.team === team
            );

            return teamMembers.length > 0 ? (
              <div key={team} className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-purple-400">
                  {header}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {teamMembers.map((member: TeamMember, index: number) => (
                    <div
                      key={`${member.name}-${index}`}
                      className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="relative h-48 w-48 mx-auto mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={620}
                          height={620}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-center mb-4">
                        {member.title}
                      </p>

                      {member.socialLinks && (
                        <div className="flex justify-center gap-4">
                          {member.socialLinks.linkedin && (
                            <Link
                              href={member.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </Link>
                          )}
                          {member.socialLinks.x && (
                            <Link
                              href={member.socialLinks.x}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </Link>
                          )}
                          {member.socialLinks.github && (
                            <Link
                              href={member.socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : null;
          })}
        </section>
      </div>
    </div>
  );
}
