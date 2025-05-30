import { colors } from '@/theme/cssVariables'
import { Flex } from '@chakra-ui/react'
import { AprData } from '@/features/Clmm/utils/calApr'
import { useAppStore } from '@/store'

export const aprColors = [colors.chart03 /* fee color */, colors.chart02, colors.chart04, colors.chart05, colors.chart06, colors.chart07]
export const emptyAprColor = aprColors[0]

export function PoolListItemAprLine({ aprData }: { aprData: AprData }) {
  const haveApr = aprData.fee.apr > 0 || aprData.rewards.some((apr) => apr.percentInTotal !== 0)
  const isMobile = useAppStore((s) => s.isMobile)

  return (
    <Flex gap={0.5} width={[12, 'unset']}>
      {haveApr ? (
        [aprData.fee, ...aprData.rewards].map(({ percentInTotal: percent }, idx) => (
          <div
            key={idx}
            style={{
              width: percent + '%',
              height: isMobile ? '6px' : '8px',
              borderRadius: '999px',
              backgroundColor: aprColors[idx]
            }}
          />
        ))
      ) : (
        <div
          style={{
            width: '100%',
            height: isMobile ? '6px' : '8px',
            borderRadius: '999px',
            opacity: 0.3,
            backgroundColor: aprColors[0],
            filter: 'contrast(.6)'
          }}
        ></div>
      )}
    </Flex>
  )
}
