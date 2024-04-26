import React from 'react'

export const Pill = ({ text, type, hollow = false, clickable = false, onClick }) => {
  const additionalClasses = () => {
    let classes = ''

    if (hollow) {
      switch (type) {
        case 'primary':
          classes =  'border border-blue-500 text-blue-500'
          break;
        case 'secondary':
          classes =  'border border-gray-500 text-gray-500'
          break;
        case 'confirmed':
          classes =  'border border-green-500 text-green-500'
          break;
        case 'pending':
          classes =  'border border-yellow-500 text-yellow-500'
          break;
        case 'canceled':
          classes =  'border border-red-500 text-red-500'
          break;
        default:
          classes =  'border border-gray-500 text-gray-500'
      }
    } else {
      switch (type) {
        case 'primary':
          classes =  'bg-blue-200 text-blue-700'
          break;
        case 'secondary':
          classes =  'bg-gray-200 text-gray-700'
          break;
        case 'confirmed':
          classes =  'bg-green-200 text-green-700'
          break;
        case 'pending':
          classes =  'bg-yellow-200 text-yellow-700'
          break;
        case 'canceled':
          classes =  'bg-red-200 text-red-700'
          break;
        default:
          classes =  'bg-gray-200 text-gray-700'
      }
    }

    if (clickable) {
      classes += ' cursor-pointer'

      switch (type) {
        case 'primary':
          classes +=  ' hover:bg-blue-300'
          break;
        case 'secondary':
          classes +=  ' hover:bg-gray-300'
          break;
        case 'confirmed':
          classes +=  ' hover:bg-green-300'
          break;
        case 'pending':
          classes +=  ' hover:bg-yellow-300'
          break;
        case 'canceled':
          classes +=  ' hover:bg-red-300'
          break;
        default:
          classes +=  ' hover:bg-gray-300'
      }
    }

    return classes
  }

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${additionalClasses()}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}
