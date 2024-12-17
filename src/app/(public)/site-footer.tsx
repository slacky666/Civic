  
export function SiteFooter() {
  return (
    <>
    <footer 
        className="relative top-0 inset-x-0 z-10 h-full sm:mx-0  overflow-hidden"
        // className="relative top-0 inset-x-0 z-10 h-full  [background-image:radial-gradient(88%_100%_at_bottom,rgba(255,255,255,255.5),rgba(255,255,255,0))]  sm:mx-0  overflow-hidden"
        // style={{boxShadow: "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",}}
    >

        <div className='container mx-auto w-full my-9 text-xs leading-loose text-muted-foreground'>
            DISCLOSURE: By purchasing $ALIENSKY coin, you agree that you are not purchasing a security or investment contract and you agree to hold the team harmless and not liable for any loses or taxes you may incur. Although ALIENSKY is a community driven Defi Ecosystem and not a registered digital currency, always make sure that you are in compliance with local laws and regulations before you make any purchase.
        </div>

    </footer>
    </>
  )
}
