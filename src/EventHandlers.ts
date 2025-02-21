import {
  Silo,
  SiloFactory,
  SiloFactory_NewSilo,
  Silo_Approval,
  Silo_Borrow,
  Silo_CollateralTypeChanged,
  Silo_Deposit,
  Silo_DepositProtected,
  Silo_FlashLoan,
  Silo_HooksUpdated,
  Silo_Initialized,
  Silo_Transfer,
  Silo_Withdraw,
  Silo_WithdrawProtected,
  Silo_WithdrawnFeed,
  Token_Approval,
  Token_DelegateVotesChanged,
  Token_OwnershipTransferred,
  Token_Transfer,
  Token_DelegateChanged,
  Token,
  SonicSiloFactory,
  SonicSilo,
  SonicSilo_Deposit,
  SonicSilo_Withdraw,
  SonicSilo_Initialized,
  SonicSilo_HooksUpdated,
  SonicSilo_Transfer,
  

} from "generated";

SiloFactory.NewSilo.contractRegister(
  async ({ event, context }) => {
    console.log("Silo Added", event.params.silo0);  
    console.log("Silo Added", event.params.silo1);
    context.addSilo(event.params.silo0);
    context.addSilo(event.params.silo1);
  },
  { preRegisterDynamicContracts: true }
);

SonicSiloFactory.NewSilo.contractRegister(
  async ({ event, context }) => {
    console.log("Silo Added", event.params.silo0);  
    console.log("Silo Added", event.params.silo1);
    context.addSilo(event.params.silo0);
    context.addSilo(event.params.silo1);
  },
  { preRegisterDynamicContracts: true }
);

SiloFactory.NewSilo.handler(async ({ event, context }) => {
  const entity: SiloFactory_NewSilo = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
    token0: event.params.token0,
    token1: event.params.token1,
    silo0: event.params.silo0,
    silo1: event.params.silo1,
    siloConfig: event.params.siloConfig,
  };

  context.SiloFactory_NewSilo.set(entity);
});

Silo.Approval.handler(async ({ event, context }) => {
  const entity: Silo_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Silo_Approval.set(entity);
});

Silo.Borrow.handler(async ({ event, context }) => {
  const entity: Silo_Borrow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Borrow.set(entity);
});

Silo.CollateralTypeChanged.handler(async ({ event, context }) => {
  const entity: Silo_CollateralTypeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    borrower: event.params.borrower,
  };

  context.Silo_CollateralTypeChanged.set(entity);
});

Silo.Deposit.handler(async ({ event, context }) => {
  const entity: Silo_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Deposit.set(entity);
});

Silo.DepositProtected.handler(async ({ event, context }) => {
  const entity: Silo_DepositProtected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_DepositProtected.set(entity);
});


Silo.FlashLoan.handler(async ({ event, context }) => {
  const entity: Silo_FlashLoan = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.Silo_FlashLoan.set(entity);
});

Silo.HooksUpdated.handler(async ({ event, context }) => {
  const entity: Silo_HooksUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    hooksBefore: event.params.hooksBefore,
    hooksAfter: event.params.hooksAfter,
  };

  context.Silo_HooksUpdated.set(entity);
});

Silo.Initialized.handler(async ({ event, context }) => {
  const entity: Silo_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Silo_Initialized.set(entity);
});


Silo.Transfer.handler(async ({ event, context }) => {
  const entity: Silo_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Silo_Transfer.set(entity);
});

Silo.Withdraw.handler(async ({ event, context }) => {
  const entity: Silo_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Withdraw.set(entity);
});

Silo.WithdrawProtected.handler(async ({ event, context }) => {
  const entity: Silo_WithdrawProtected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_WithdrawProtected.set(entity);
});

Silo.WithdrawnFeed.handler(async ({ event, context }) => {
  const entity: Silo_WithdrawnFeed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    daoFees: event.params.daoFees,
    deployerFees: event.params.deployerFees,
  };

  context.Silo_WithdrawnFeed.set(entity);
});

Token.Approval.handler(async ({ event, context }) => {
  const entity: Token_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Silo_Approval.set(entity);
});

Token.DelegateChanged.handler(async ({ event, context }) => {
  const entity: Token_DelegateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
  };

  context.Token_DelegateChanged.set(entity);
});

Token.DelegateVotesChanged.handler(async ({ event, context }) => {
  const entity: Token_DelegateVotesChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousBalance: event.params.previousBalance,
    newBalance: event.params.newBalance,
  };

  context.Token_DelegateVotesChanged.set(entity);
});

Token.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Token_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Token_OwnershipTransferred.set(entity);
});

Token.Transfer.handler(async ({ event, context }) => {
  const entity: Token_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Token_Transfer.set(entity);
});

// Event Handlers for Silos on Sonic
SonicSilo.Transfer.handler(async ({ event, context }) => {
  const entity: SonicSilo_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.SonicSilo_Transfer.set(entity);
});

SonicSilo.Withdraw.handler(async ({ event, context }) => {
  const entity: SonicSilo_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.SonicSilo_Withdraw.set(entity);
});

SonicSilo.Deposit.handler(async ({ event, context }) => {
  const entity: SonicSilo_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.SonicSilo_Deposit.set(entity);
});
SonicSilo.HooksUpdated.handler(async ({ event, context }) => {
  const entity: SonicSilo_HooksUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    hooksBefore: event.params.hooksBefore,
    hooksAfter: event.params.hooksAfter,
  };

  context.SonicSilo_HooksUpdated.set(entity);
});
SonicSilo.Initialized.handler(async ({ event, context }) => {
  const entity: SonicSilo_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.SonicSilo_Initialized.set(entity);
});