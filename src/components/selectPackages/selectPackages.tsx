import ButtonRadio from "./buttonRadio";

const options = [
  { id: 'option1', label: 'Mensal' },
  { id: 'option2', label: 'Trimestral' },
  { id: 'option3', label: 'Outros' },
]

const peerVariants: { [key: string]: string } = {
  option1: 'peer/option1',
  option2: 'peer/option2',
  option3: 'peer/option3',
}

const checkedVariants: { [key: string]: string } = {
  option1: 'peer-checked/option1:text-tx1',
  option2: 'peer-checked/option2:text-tx1',
  option3: 'peer-checked/option3:text-tx1',
}

const slideVariants: { [key: string]: string } = {
  option1: 'peer-checked/option1:left-[12px]',
  option2: 'peer-checked/option2:left-[calc(12px+1*6rem)]',
  option3: 'peer-checked/option3:left-[calc(12px+2*6rem)]',
  option2sm: 'sm:peer-checked/option2:left-[calc(12px+1*9rem)]',
  option3sm: 'sm:peer-checked/option3:left-[calc(12px+2*9rem)]',
}

export default function SelectPackages() {
  return (
    <fieldset className="relative inline-flex gap-0 py-2 px-3 bg-white rounded-lg">
      {options.map((option, index) => (
        <ButtonRadio
          key={option.id}
          label={option.label}
          id={option.id}
          name='options'
          peer={peerVariants[option.id]}
          peerChecked={checkedVariants[option.id]}
          index={index}
        />
      ))}
      
      <div className={`absolute w-24 bg-bg1 rounded h-[calc(100%-1rem)] duration-500 ease-in-out left-[12px]
        sm:w-36
        ${slideVariants['option1']} ${slideVariants['option2']} ${slideVariants['option3']}
        ${slideVariants['option2sm']} ${slideVariants['option3sm']}
      `} />
    </fieldset>
  )
}