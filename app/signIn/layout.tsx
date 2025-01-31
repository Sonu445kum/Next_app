export default function({children}:{
    children: React.ReactNode
}){
    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
        20% off for the next 3 days
    </div>
    {children}
</div>
}