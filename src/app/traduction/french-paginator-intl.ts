import {MatPaginatorIntl} from '@angular/material';


const frenchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  const nbPage = Math.ceil(length / pageSize);
  //return `${startIndex + 1} - ${endIndex} / ${length} (${page})`;
  return `Page ${page + 1} sur ${nbPage}`;
}


export function getFrenchPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'Afficher:';
  paginatorIntl.nextPageLabel = 'Page suivante';
  paginatorIntl.previousPageLabel = 'Page précédente';
  paginatorIntl.getRangeLabel = frenchRangeLabel;

  return paginatorIntl;
}
