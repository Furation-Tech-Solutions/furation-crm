import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { useObjectNameSingularFromPlural } from '@/object-metadata/hooks/useObjectNameSingularFromPlural';
import { turnSortsIntoOrderBy } from '@/object-record/object-sort-dropdown/utils/turnSortsIntoOrderBy';
import { useRecordTableScopedStates } from '@/object-record/record-table/hooks/internal/useRecordTableScopedStates';
import { useRecordTable } from '@/object-record/record-table/hooks/useRecordTable';
import { turnFiltersIntoObjectRecordFilters } from '@/object-record/utils/turnFiltersIntoWhereClause';
import { signInBackgroundMockCompanies } from '@/sign-in-background-mock/constants/signInBackgroundMockCompanies';

import { useFindManyRecords } from './useFindManyRecords';

export const useObjectRecordTable = () => {
  const { scopeId: objectNamePlural, setRecordTableData } = useRecordTable();
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  const { objectNameSingular } = useObjectNameSingularFromPlural({
    objectNamePlural,
  });

  const { objectMetadataItem: foundObjectMetadataItem } = useObjectMetadataItem(
    {
      objectNameSingular,
    },
  );
  const { tableFiltersState, tableSortsState, tableLastRowVisibleState } =
    useRecordTableScopedStates();

  const tableFilters = useRecoilValue(tableFiltersState);
  const tableSorts = useRecoilValue(tableSortsState);
  const setLastRowVisible = useSetRecoilState(tableLastRowVisibleState);

  const requestFilters = turnFiltersIntoObjectRecordFilters(
    tableFilters,
    foundObjectMetadataItem?.fields ?? [],
  );

  const orderBy = turnSortsIntoOrderBy(
    tableSorts,
    foundObjectMetadataItem?.fields ?? [],
  );

  const { records, loading, fetchMoreRecords, queryStateIdentifier } =
    useFindManyRecords({
      objectNameSingular,
      filter: requestFilters,
      orderBy,
      onCompleted: () => {
        setLastRowVisible(false);
      },
    });

  return {
    records: currentWorkspace ? records : signInBackgroundMockCompanies,
    loading,
    fetchMoreRecords,
    queryStateIdentifier,
    setRecordTableData,
  };
};
