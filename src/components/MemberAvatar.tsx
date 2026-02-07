import darkLogo from '@/assets/logos/dark-logo.svg';

interface MemberAvatarProps {
  name: string;
  profession?: string;
  photo?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MemberAvatar = ({ name, profession, photo, size = 'md' }: MemberAvatarProps) => {
  const sizeClasses = {
    sm: {
      container: 'w-32',
      outer: 'w-28 h-28',
      inner: 'w-20 h-20',
      logo: 'w-8 h-8',
      logoPos: '-top-1 -left-1',
      initials: 'text-2xl',
    },
    md: {
      container: 'w-44',
      outer: 'w-36 h-36',
      inner: 'w-28 h-28',
      logo: 'w-10 h-10',
      logoPos: '-top-1 -left-1',
      initials: 'text-3xl',
    },
    lg: {
      container: 'w-56',
      outer: 'w-48 h-48',
      inner: 'w-36 h-36',
      logo: 'w-12 h-12',
      logoPos: '-top-2 -left-2',
      initials: 'text-4xl',
    },
  };

  const classes = sizeClasses[size];
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className={`flex flex-col items-center ${classes.container}`}>
      {/* Avatar container with rings */}
      <div className="relative">
        {/* Outer ring - Navy blue */}
        <div className={`${classes.outer} rounded-full bg-primary p-1 flex items-center justify-center`}>
          {/* Inner white ring (gap) */}
          <div className={`${classes.inner} rounded-full bg-background p-1 flex items-center justify-center overflow-hidden`}>
            {/* Photo or initials */}
            {photo ? (
              <img 
                src={photo} 
                alt={`Portrait de ${name}`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center">
                <span className={`${classes.initials} font-heading font-bold text-primary-foreground/90`}>
                  {initials}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Logo overlay - top left */}
        <div className={`absolute ${classes.logoPos} ${classes.logo} bg-background rounded-full p-0.5 shadow-md`}>
          <img 
            src={darkLogo} 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Name badge */}
      <div className="mt-4 text-center">
        <div className="bg-background border-2 border-primary rounded-lg px-4 py-2 shadow-soft">
          <h3 className="font-heading font-semibold text-base md:text-lg text-primary leading-tight">
            {name}
          </h3>
        </div>
        
        {/* Profession badge */}
        {profession && (
          <div className="mt-2 bg-secondary rounded-lg px-3 py-1.5 inline-block">
            <p className="text-sm font-medium text-secondary-foreground">
              {profession}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberAvatar;
