import IconArrowDown from './assets/icon-arrow-down.svg'
import List from './components/List'

function App() {
  return (
    <div className="leading-custom min-h-screen bg-[#F5F5F5] px-2.5 pt-10 pb-16 tracking-[-0.01em] text-black">
      <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:max-w-300 lg:grid-cols-[300px_1fr_300px]">
        <div className="flex flex-col gap-2.5">
          <div className="rounded-custom shadow-custom flex h-50 flex-col gap-3.75 bg-white p-2.5">
            <h2 className="font-bold">Hello World</h2>
            <p>This is some regular text</p>
            <button className="bg-primary rounded-custom hover:bg-primary/90 w-max px-4.75 py-[10.5px] text-white">
              Let's Go
            </button>
            <div className="group relative">
              <button className="rounded-custom flex w-full items-center justify-between border border-[#BBBBBB] pt-2.5 pr-2.75 pb-2.75 pl-3.75 text-left">
                <span>Option 1</span>
                <img src={IconArrowDown} alt="" className="h-3.75 w-3.75" />
              </button>
              <div className="rounded-custom shadow-custom absolute top-full left-0 z-10 mt-1 hidden w-full border border-white bg-white group-focus-within:block">
                <div className="cursor-pointer px-3.75 py-2.5 hover:bg-gray-100">
                  Option 1
                </div>
                <div className="cursor-pointer px-3.75 py-2.5 hover:bg-gray-100">
                  Option 2
                </div>
                <div className="cursor-pointer px-3.75 py-2.5 hover:bg-gray-100">
                  Option 3
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:hidden">
            <List />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="rounded-custom shadow-custom flex h-75 items-center justify-center bg-white">
            <span className="text-[24px] font-bold">Card 1</span>
          </div>
          <div className="rounded-custom shadow-custom flex h-75 items-center justify-center bg-white">
            <span className="text-[24px] font-bold">Card 2</span>
          </div>
          <div className="rounded-custom shadow-custom flex h-75 items-center justify-center bg-white">
            <span className="text-[24px] font-bold">Card 3</span>
          </div>
        </div>
        <div className="block md:hidden lg:block">
          <List />
        </div>
      </div>
    </div>
  )
}

export default App
