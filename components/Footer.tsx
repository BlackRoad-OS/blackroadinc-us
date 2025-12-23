import Link from 'next/link';

export default function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/about/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    investors: [
      { name: 'Overview', href: '/investors' },
      { name: 'Thesis', href: '/investors/thesis' },
      { name: 'Contact', href: '/investors/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'DMCA', href: '/legal/dmca' },
    ],
    connect: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/blackroad-os', external: true },
      { name: 'GitHub', href: 'https://github.com/BlackRoad-OS', external: true },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Investors</h3>
            <ul className="space-y-3">
              {navigation.investors.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              {navigation.connect.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} BlackRoad OS, Inc. | Delaware C-Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
