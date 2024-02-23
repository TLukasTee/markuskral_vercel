import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

import { Chevron } from '../Chevron'

import classes from './index.module.scss'

export const Pagination: React.FC<{
  page: number
  totalPages: number
  onClick: (page: number) => void
  className?: string
}> = props => {
  const { page, totalPages, onClick, className } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  return (
    <div className={[classes.pagination, className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={classes.button}
        disabled={!hasPrevPage}
        onClick={() => {
          onClick(page - 1)
        }}
      >
        <ArrowLongLeftIcon rotate={90} className="mx-5 h-6 w-auto" />
      </button>
      <div className={classes.pageRange}>
        <span className={classes.pageRangeLabel}>
          Seite {page} von {totalPages}
        </span>
      </div>
      <button
        type="button"
        className={classes.button}
        disabled={!hasNextPage}
        onClick={() => {
          onClick(page + 1)
        }}
      >
        <ArrowLongRightIcon rotate={-90} className="mx-5 h-6 w-auto" />
      </button>
    </div>
  )
}
