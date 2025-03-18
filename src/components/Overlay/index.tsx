type OverlayProps = {
  toggleId: string;
};

export function Overlay({ toggleId }: OverlayProps) {
  return (
    <label 
      htmlFor={toggleId} 
      className="fixed inset-0 bg-black/30 z-40 hidden peer-checked:block md:peer-checked:hidden cursor-pointer" 
      aria-label="Close drawer"
    />
  );
}
