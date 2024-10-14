type Props = {
  children: React.ReactNode;
};

// RootLayout -> AboutLayout -> Page
export default function AboutLayout({ children }: Props) {
  return (
    <div className="mt-10">
      <p>AboutLayout</p>
      {children}
    </div>
  );
}
